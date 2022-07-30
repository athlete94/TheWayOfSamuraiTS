import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {useAppSelector} from "../../redux/hooks";

export type BasicPaginationType = {
    handleChange: (event: React.ChangeEvent<unknown>, value: number) => void
    pagesCount: number
}

export default function BasicPagination({handleChange, pagesCount}: BasicPaginationType) {
    const page = useAppSelector(state => state.UsersReducer.currentPage)

    return (
        <Stack spacing={2}>
            <Pagination count={pagesCount} onChange={handleChange}  page={page} />
        </Stack>
    );
}
