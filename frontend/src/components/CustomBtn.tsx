import { LoadingButton, LoadingButtonProps } from "@mui/lab";
import { useAppSelector } from "store/hooks";


interface Props extends LoadingButtonProps {
  icon?: React.ReactNode;
  title?: string
}

const CustomBtn: React.FC<Props> = ({ icon, title, ...props }) => {
  const btnLoading = useAppSelector(state => state.btnLoading.value);

  return (
    <LoadingButton {...props} loading={btnLoading}>
      {icon && <span className="mr-3">{icon}</span>}
      {title}
    </LoadingButton>
  )
}
export default CustomBtn;