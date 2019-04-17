import React from 'react'

import Typography from '@material-ui/core/Typography';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export default (props) => {
  return(

    <div>
      <div>
        <Typography variant="h6" style={{wordBreak: 'break-word', padding: 12}}>Call Parameters</Typography>
        <Table>
          <TableHead>
            <TableRow>
              {props.callTable.headings.map((h, i) => <TableCell key={i}>{h}</TableCell>)}
            </TableRow>
          </TableHead>
          <TableBody>
              {props.callTable.data.map((r, i) => (
                <TableRow key={i}>
                  {r.map( (c, j) => <TableCell key={j}>{c}</TableCell>)}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
      {props.callAndResponseStrings.map((s, i) => (
      <div style={{padding: 12}} key={i} >
        <Typography variant="h6" style={{wordBreak: 'break-word'}}>{s.title}</Typography>
        <Typography variant="body2" style={{wordBreak: 'break-word'}}>{s.url}</Typography>
      </div>
      ))}
      <div>
        <Typography variant="h6" style={{wordBreak: 'break-word', padding: 12}}>Resonse Parameters</Typography>
        <Table>
          <TableHead>
            <TableRow>
              {props.responseTable.headings.map((h, i) => <TableCell key={i}>{h}</TableCell>)}
            </TableRow>
          </TableHead>
          <TableBody>
              {props.responseTable.data.map((r, i) => (
                <TableRow key={i}>
                  {r.map( (c, j) => <TableCell key={j}>{c}</TableCell>)}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
