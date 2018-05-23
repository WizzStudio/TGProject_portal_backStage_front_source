import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';

import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import {getMemberByName} from "../../service/API";

@inject('appState')
@observer
class memberTable extends React.Component{
  constructor(props){
    super(props)
    this.state = {
    }
  }
  
  
  render(){
    return (
      <div>
        <Paper >
          <Table >
            <TableHead>
              <TableRow>
                <TableCell>姓名</TableCell>
                <TableCell >角色</TableCell>
                <TableCell >专业</TableCell>
                <TableCell >标签</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.memberList.map(n => {
                return (
                  <TableRow key={n.id}>
                    <TableCell>{n.username}</TableCell>
                    <TableCell>{this.props.appState.getDepartmentsById(n.departmentId)}</TableCell>
                    <TableCell>{n.college}</TableCell>
                    <TableCell>{n.tag}</TableCell>
                    <Button color="primary" onClick={this.props.enterFunc.bind(this,n.id)}>
                      进入
                    </Button>
                    <Button color="accent" onClick={this.props.delFunc.bind(this,n.id)}>
                      删除
                    </Button>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
      </div>
    )
  }
}


memberTable.propTypes = {
  memberList:PropTypes.array,
  enterFunc:PropTypes.func,
  delFunc:PropTypes.func
};


export default memberTable
