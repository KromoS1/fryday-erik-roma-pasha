export type StatusAppAT =
    | ReturnType<typeof setIsInit>
    | ReturnType<typeof setStatusApp>
    | ReturnType<typeof setModalStatus>

export type Status = 'idle' | 'load' | 'success' | 'error'
export type ModalStatus = 'no-status' | 'add-pack' | 'add-card' | 'delete' | 'update'
export type ModalType = {
    modalStatus: ModalStatus
    isShow: boolean
    modalTitle: string
    itemID?: string
    itemName?: string
}

export interface StatusApp {
    isInitialize: boolean
    status: Status
    message: string
    modal: ModalType
}

const initialState: StatusApp = {
    isInitialize: false,
    status: 'idle',
    message: '',
    modal: {
        modalStatus: 'no-status',
        isShow: false,
        modalTitle: '',
        itemID: '',
        itemName: ''
    }
}

export const setIsInit = (isInit: boolean) => ({type: 'STATUS-APP/SET_IS_INITIALIZE', isInit} as const);
export const setStatusApp = (status: Status, message: string) => ({
    type: 'STATUS-APP/SET-STATUS',
    payload: {status, message}
} as const);
export const setModalStatus = (
    modalStatus: ModalStatus,
    isShow: boolean,
    modalTitle: string,
    itemID?: string,
    itemName?: string
) => {
    return ({type: 'STATUS-APP/SET-MODAL-STATUS', modalStatus, isShow, modalTitle, itemID, itemName} as const)
};

export const statusAppReducer = (state = initialState, action: StatusAppAT): StatusApp => {
    switch (action.type) {
        case 'STATUS-APP/SET_IS_INITIALIZE':
            return {...state, isInitialize: action.isInit}
        case 'STATUS-APP/SET-STATUS':
            return {...state, ...action.payload}
        case "STATUS-APP/SET-MODAL-STATUS":
            return {
                ...state,
                modal: {
                    modalStatus: action.modalStatus,
                    isShow: action.isShow,
                    modalTitle: action.modalTitle,
                    itemID: action.itemID,
                    itemName: action.itemName
                }
            }
        default:
            return state
    }
}

