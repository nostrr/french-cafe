interface FormValidation {
  [key: string]: (value: string) => boolean;
}

export const formValidation: FormValidation = {
  email: function(email : string): boolean {
    const reg = /\S+@\S+\.\S+/;
    return reg.test(email);
  },
  name: function(name: string): boolean {
    const reg = /^[A-Za-zА-Яа-яЁёЇїІіЄєҐґ]{2,}/;
    return reg.test(name);
  },
  phone: function(phone:string):boolean{
    const req = /^(\+)?\d{10,}$/;
    return req.test(phone);
  },
  message: function(message:string): boolean{
    return true;
  }
};