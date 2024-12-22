import { GridColumnMenu } from "@mui/x-data-grid";

export default function CustomColumnMenu(props) {
  return (
    <GridColumnMenu
      {...props}
      slots={{
        columnMenuSortItem: null,
      }}
    />
  );
}
