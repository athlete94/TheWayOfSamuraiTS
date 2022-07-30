import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {setPageSize} from "../../redux/UsersReducer";

export default function SelectAutoWidth() {
    const pageSize = useAppSelector(state => state.UsersReducer.pageSize)
   const dispatch = useAppDispatch()


    const handleChange = (event: SelectChangeEvent) => {
        dispatch(setPageSize(+event.target.value))
    };

    return (
        <div>
            <FormControl sx={{ m: 1, minWidth: 80 }} size='small'>
                <InputLabel id="demo-simple-select-autowidth-label">Page size</InputLabel>
                <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={String(pageSize)}
                    onChange={handleChange}
                    autoWidth
                    label="page size"
                >
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                    <MenuItem value={50}>50</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}
