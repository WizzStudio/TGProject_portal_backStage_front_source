import React, {Component} from 'react';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';

class projTable extends React.Component{
  constructor(props){
    super(props)
  }
  
  render(){
    return (
      <Paper >
        <Table >
          <TableHead>
            <TableRow>
              <TableCell>项目名</TableCell>
              <TableCell >介绍</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.projectList.map(n => {
              return (
                <TableRow key={n.id}>
                  <TableCell>{n.projectName}</TableCell>
                  <TableCell>{n.introduction}</TableCell>
                  <Button color="primary" onClick={this.props.enterFunc().bind(this,n.id)}>
                    进入
                  </Button>
                  <Button color="accent" onClick={this.props.delFunc().bind(this,n.id)}>
                    删除
                  </Button>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    )
  }
}


projTable.propTypes = {
  projectList:PropTypes.array,
  enterFunc:PropTypes.func,
  delFunc:PropTypes.func
};


export default projTable
