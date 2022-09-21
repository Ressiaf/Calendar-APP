import { onCloseDateModal, onOpenDateModal } from '../store';
import { useDispatch, useSelector } from 'react-redux';


export const useUIStore = () => {

    const dispatch = useDispatch();

    const { isDateModalOpen } = useSelector( state => state.ui );

    const openDateModal = ( ) => {
        dispatch( onOpenDateModal( ) );
    }

    const closeDateModal = ( ) => {
        dispatch( onCloseDateModal( ) );
    }

    const toggleDateModal = () => {
        (isDateModalOpen)
            ? openDateModal()
            : closeDateModal();
    }



    return {
        isDateModalOpen,
        closeDateModal,
        openDateModal,
        toggleDateModal,
    }

}