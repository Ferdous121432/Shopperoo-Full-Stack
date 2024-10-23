import * as React from "react";
import Avatar from "@mui/material/Avatar";

export default function UserAvatar() {
  return (
    <Avatar
      alt="Remy Sharp"
      src="/image/avatar-1.AVIF"
      sx={{
        width: window.innerWidth < 600 ? 30 : 40,
        height: window.innerWidth < 600 ? 30 : 40,
      }}
    />
  );
}
