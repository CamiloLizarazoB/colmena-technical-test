import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { TUsers } from "@/utils/types";
import { useState } from "react";
import { BoxStyled } from "../styles";

export default function SelectComponent({
  users,
  handleSetUserId,
}: {
  users: TUsers[] | undefined;
  handleSetUserId: (userId: number) => void;
}) {
  const [email, setEmail] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setEmail(event.target.value as string);
    handleSetUserId(Number(event.target.value));
  };

  return (
    <BoxStyled>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
          Filter by user email
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={email}
          label="Filter by user email"
          onChange={handleChange}
        >
          <MenuItem key={0} value={0}>
            {"All"}
          </MenuItem>
          {users?.map((user, index) => (
            <MenuItem key={`${user.username}${index}`} value={user.id}>
              {user.email}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </BoxStyled>
  );
}
