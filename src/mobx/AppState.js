import { observable,action} from 'mobx';


class AppState {
  @observable testCount = 1;
  
  constructor() {
  }
  
 @action countUP(){
    this.testCount ++;
    console.log(this.testCount)
  }
  
}

export default AppState;
