export enum accessOptions {
  administrator = "administrador",
  manager = "gerente",
  employee = "funcionário",
  undefined = "Não Definido",
}

class Person {
  address?: string[];
  age?: number;

  constructor(public fullName: string) {}
}

//Implementar interface em classe e ter um contrato
export class User extends Person {
  access?: accessOptions;
  active?: boolean;

  constructor(
    public fullName: string,
    public register?: string | number,
  ) {
    super(fullName);
  }
}

// const user: IUser = {
//   fullName: "",
//   address: [],
//   access: accessOptions.employee,
//   active: true,
// };

// export interface ISpeaker extends IPerson {
//   eventAsSpeaker: string[];
//   description: string;
//   linkedInURL: string;
// }
//
// export interface IParticipant extends IUser, IPerson {
//   eventAsParticipant: string[];
// }
//
// const user: IParticipant = {
//   fullName: "Marcos",
//   age: 25,
//   address: ["Casa", "Trabalho"],
//   eventAsParticipant: ["Angular", "TypeScipt", "React"],
//   addPerson(): void {},
// };

// interface ICar {
//   readonly nickname: string;
//   color: string;
//   tires?: number;
//   speedValue: number;
//   breakValue?: number;
//   //Funções com ou sem arrow
//   speed(x: number): number;
//   break: (y: number) => number;
// }
//
// const carBear: ICar = {
//   nickname: "The Bear",
//   color: "Black Piano",
//   speedValue: 5,
//   speed(a: number): number {
//     return this.speedValue;
//   },
//   break: (b: number): number => {
//     return 2;
//   },
// };
//
// const carOrange: ICar = {
//   nickname: "The Orange",
//   color: "Orange",
//   speedValue: 4,
//   breakValue: 3,
//   //Função declarativa pode usar o this
//   speed(): number {
//     return this.speedValue;
//   },
//   //Função anonima pode usar o this
//   //Arrow não pode usar o this
//   break: function (): number {
//     return this.breakValue;
//   },
// };
