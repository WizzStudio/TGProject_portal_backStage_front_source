import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});



@inject('appState')
@observer
export class projects extends Component {
	constructor(props) {
		super(props)
		this.state = {
		  projects_cate1:[
          {
            "id": 3,
            "projectName": "基于大数据的医疗数据分析系统",
            "leaderId": 7,
            "startDate": 1511280000000,
            "finishedDate": 1513008000000,
            "members": [
              {
                "id": 6,
                "username": "王星锦",
                "college": "软件工程",
                "departmentId": 1,
                "projectId": 3,
                "avatar": "http://dysmorsel2.oss-cn-hangzhou.aliyuncs.com/TG/avatar8.svg",
                "introduction": "TG工作室PHP组组长",
                "tag": "[\"哲学\",\"王比利\",\"眼睛很大\"]",
                "gender": 1,
                "age": 20
              }
            ],
            "sourceUrl": "https://github.com/TGclub",
            "frontProgress": 0,
            "backProgress": 0,
            "totalProgress": 0,
            "introduction": "对海量的医疗信息和数据进行分析和采集，通过集群计算，为医疗行业提供更加专业更加可靠的数据支撑，从而提供高效而准确的医疗手段和策略 ",
            "picUrl": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511249995682&di=cd4f49399896958a9f203c2b29ae550f&imgtype=0&src=http%3A%2F%2Fwww.36dsj.com%2Fwp-content%2Fuploads%2F2015%2F03%2F514.jpg",
            "categories": null,
            "uiprogress": 0
          }
      ],
		  projects_cate2:[],
		  projects_cate3:[],
		  projects_cate4:[],
		  projects_cate5:[],
		  projects_cate6:[],
    
    }
	}
	
	/*在渲染前调用*/
	componentWillMount() {
	}
	
	/*在第一次渲染后调用*/
	componentDidMount() {
	}
	
	
	objList = data =>(
    <Paper >
      <Table >
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell >Calories</TableCell>
            <TableCell >Fat (g)</TableCell>
            <TableCell >Carbs (g)</TableCell>
            <TableCell >Protein (g)</TableCell>
            <TableCell >Protein (g)</TableCell>
            <TableCell >Protein (g)</TableCell>
            <TableCell >Protein (g)</TableCell>
            <TableCell >Protein (g)</TableCell>
            <TableCell >Protein (g)</TableCell>
            <TableCell >Protein (g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => {
            return (
              <TableRow key={n.id}>
                <TableCell>{n.projectName}</TableCell>
                <TableCell>{n.introduction}</TableCell>
                <TableCell>{n.picUrl}</TableCell>
                <TableCell>{n.leaderId}</TableCell>
                <TableCell>{n.startDate}</TableCell>
                <TableCell>{n.finishedDate}</TableCell>
                <TableCell>{n.sourceUrl}</TableCell>
                <TableCell>{n.frontProgress}</TableCell>
                <TableCell>{n.backProgress}</TableCell>
                <TableCell>{n.totalProgress}</TableCell>
                <TableCell>{n.uiProgress}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  )
	
	/*渲染函数*/
	render() {
		return (
			<div>
        {this.objList(this.state.projects_cate1)}
			</div>
		);
	}
}
