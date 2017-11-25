import { observable} from 'mobx';


class AppState {
  @observable testCount = 1;
  
  constructor() {
  }
  
  countUP(){
    this.testCount ++;
    console.log(this.testCount)
  }
  
}

export default AppState;
