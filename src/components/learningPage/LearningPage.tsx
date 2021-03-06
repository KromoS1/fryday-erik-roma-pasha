import React, {FC, memo, useEffect, useRef, useState} from 'react'
import {NavLink, useParams} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {Button} from "antd";
import {RightOutlined} from '@ant-design/icons';
import {AppRootStateType} from "../../app/Store";
import {getCardGrade, getCards, GradeUpdateType, updateCardsLocal, updateGrade} from "../cards/CardsReducer";
import {CardsType} from "../../api/CardsAPI";
import style from './LeanrningPage.module.scss'
import {Preloader} from "../../commonComponents/preloader/Preloader";

interface ValuesType {
    email: string
    password: string
}

interface PropsType {
    onSubmit: (data: ValuesType) => void
}

const grades = [1, 2, 3, 4, 5];

const getCard = (cards: CardsType[]) => {

    const sum = cards.reduce((acc, card) => acc + (6 - card.grade) * (6 - card.grade), 0);
    const rand = Math.random() * sum;
    const res = cards.reduce((acc: { sum: number, id: number }, card, i) => {
            const newSum = acc.sum + (6 - card.grade) * (6 - card.grade);
            return {sum: newSum, id: newSum < rand ? i : acc.id}
        }, {sum: 0, id: -1}
    );

    return cards[res.id + 1];
}

export const LearningPage: FC<PropsType> = memo(() => {
    const status = useSelector<AppRootStateType, string>(state => state.statusApp.status);
    const updateData = useSelector<AppRootStateType, GradeUpdateType>(state => state.cards.gradeData)
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const [first, setFirst] = useState<boolean>(true);
    const cards = useSelector<AppRootStateType, CardsType[]>(state => state.cards.cards);
    const {pack_id} = useParams<{ pack_id: string }>();
    const grade = useRef<number | null>();
    const dispatch = useDispatch();

    const [card, setCard] = useState<CardsType>({
        _id: 'fake',
        cardsPack_id: '',
        user_id: '',
        answer: 'answer fake',
        question: '',
        grade: 0,
        shots: 0,
        type: '',
        rating: 0,
        created: '',
        updated: '',
    });

    useEffect(() => {
        grade.current = null
        if (first) {
            dispatch(getCards({cardsPack_id: pack_id}))
            setFirst(false);
        }
        if (cards) {
            setCard(getCard(cards));
        }
        return () => {
            dispatch(getCardGrade({card_id: '', grade: 0}))
        }
    }, [dispatch, pack_id, first, cards]);

    const onNext = () => {
        setIsChecked(false);
        if (cards) {
            grade.current && dispatch(updateGrade(card._id, card.grade))
            dispatch(updateCardsLocal(updateData))
        } else {
            console.log('nothing')
        }
    }

    const fontSizeForAnswer = card?.answer.length > 121 ? '2rem' : '3rem';

    return (
        <div className={style.learnContainer}>
            <div className={style.container}>
                <div className={style.title}>Cards Learning</div>
                {status !== 'load' ? <div className={style.titleName}>
                    {card ? <h3>{card.question}</h3> : <h3>There is now cards</h3>}
                </div> : <Preloader/>}
                <div className={style.buttons}>
                    <NavLink exact to={'/packs'}><Button danger>Cancel</Button></NavLink>
                    {card &&
                    <Button disabled={isChecked} onClick={() => setIsChecked(true)} type={'primary'}>Check</Button>}
                </div>

                {isChecked && (
                    <>
                        <div className={style.answer} style={{fontSize: fontSizeForAnswer}}>{card.answer}</div>
                        <div className={style.buttons}>
                            {grades.map((g, i) => (
                                <Button key={'grade-' + i} onClick={() => {
                                    grade.current = g
                                    setCard({...card, grade: g})
                                }}>{g}</Button>
                            ))}
                            <Button icon={<RightOutlined/>} onClick={onNext}>next</Button>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
})

