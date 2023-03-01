import {useSelector} from "react-redux";
import { City } from "../../models";
import {RootState} from "../../redux/store";

interface UseGetSelectedCity {
    cityDetail:City | null
}

export const useGetSelectedCity = ():UseGetSelectedCity => {
    const {selectedCity: {cityDetail}} = useSelector((state: RootState) => state)
    return {cityDetail}

}