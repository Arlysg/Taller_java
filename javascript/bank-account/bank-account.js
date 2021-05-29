
export class BankAccount {
  constructor() {
    this.accountOpen = false;
    this.accountBallance = 0;
  
  }

  open() {
  
    if(this.accountOpen){
      throw new ValueError;
    }
    else{
      this.accountOpen = true;
      this.accountBallance = 0;
    }
  }

  close() {
     
    if(!this.accountOpen){
      throw new ValueError;
    }
    else{
      this.accountOpen = false;
      this.accountBallance = 0;
    }

  }

  deposit(value) {

    if(value < 0 || !this.accountOpen){
      throw new ValueError
    }
    else{
      this.accountBallance += value;
    } 

  }

  withdraw(value) {
    if(value > this.accountBallance || value < 0){
      throw new ValueError
    }
    else{
      this.accountBallance -= value;
    }

  }

  get balance() {
    if(this.accountOpen){
      return this.accountBallance
    }
    else{
       throw new ValueError
    }
  }
 
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  } 
}
