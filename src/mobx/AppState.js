import { observable,action} from 'mobx';


class AppState {
  @observable testCount = 1;
  @observable projectId = null;
  @observable departments = {
    '1': '技术',
    '2': '设计',
    '3': '产品',
    '4': '运营'
  }
  
  constructor() {
  }
  
 @action countUP(){
    this.testCount ++;
    console.log(this.testCount)
  }
  
  @action storeProjectId(id){
   this.projectId =id
  }
  
  // 转换到添加项目
  @action switchToAddProject(){
    this.projectId =-9
  }
  
  @action getDepartmentsById(id){
    return this.departments[id.toString()]
  }
  
  @action getAllDepartments() {
    return this.departments
  }
}

export default AppState;
