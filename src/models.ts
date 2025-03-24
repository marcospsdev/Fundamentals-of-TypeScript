export enum accessOptions {
  administrator = "administrador",
  manager = "gerente",
  employee = "funcionário",
  undefined = "Não Definido",
}

interface IPerson {
  fullName: string;
  address?: string[];
}

//Reabrir interface
interface IPerson {
  age?: number;
}

//Extender interface
export interface IUser extends IPerson {
  register?: string | number;
  access?: accessOptions;
  active?: boolean;
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
