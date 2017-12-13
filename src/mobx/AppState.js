import { observable,action} from 'mobx';


class AppState {
  @observable testCount = 1;
  @observable projectId = null;
  
  constructor() {
  }
  
 @action countUP(){
    this.testCount ++;
    console.log(this.testCount)
  }
  
  @action storeProjectId(id){
   this.projectId =id
  }
  
}

export default AppState;
