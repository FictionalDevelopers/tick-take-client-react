import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { format } from 'date-fns';
import { Link as RouterLink } from 'react-router-dom';

import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import TablePagination from '@material-ui/core/TablePagination';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { pageChange } from '../../actions';

export default function LotTable({ lots, currentPage, count, limit }) {
  const dispatch = useDispatch();

  return (
    <Paper>
      <TablePagination
        rowsPerPageOptions={[]}
        component="div"
        count={count}
        rowsPerPage={limit}
        page={currentPage - 1}
        onChangePage={(event, newPage) => {
          dispatch(pageChange({ page: newPage + 1 }));
        }}
      />
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Status</TableCell>
              <TableCell align="right">Created</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {lots.map((lot) => (
              <TableRow key={lot._id}>
                <TableCell component="th" scope="row">
                  <Link to={`/profile/lots/${lot._id}`} component={RouterLink}>
                    {lot.name}
                  </Link>
                </TableCell>
                <TableCell>{lot.status}</TableCell>
                <TableCell align="right">
                  <div>{format(new Date(lot.createdAt), 'do MMM yyyy, h:mm b')}</div>
                  <Typography variant="caption" color="textSecondary" display="block">
                    {format(new Date(lot.createdAt), 'yyyy/MM/dd HH:mm')}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

LotTable.propTypes = {
  lots: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  currentPage: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
};
