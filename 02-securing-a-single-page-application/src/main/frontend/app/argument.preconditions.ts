export class ArgumentPreconditions {
  static requireNonNull(message:string, argument:Object) {
    if(argument === undefined || argument === null) {
      throw new Error(message);
    }
  }
}
