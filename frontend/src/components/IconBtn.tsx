import { IconButton, IconButtonProps } from "@mui/material";

interface Props extends IconButtonProps {
  icon: React.ReactNode
}

const IconBtn: React.FC<Props> = ({ icon, ...props }) => {
  return (
    <IconButton {...props}>
      {icon}
    </IconButton>
  )
}
export default IconBtn;