import { RiPlayFill } from "react-icons/ri";
import { GiCarDoor, GiKey } from "react-icons/gi";
import { AiFillCar } from "react-icons/ai";

export default [
  {
    title: "Meu veículo",
    icon: <AiFillCar />,
    type: "category",
    action: "Vehicle",
    value: "vehicle",
    category: "car",
  },
  {
    title: "Portas",
    icon: <GiCarDoor />,
    type: "category",
    action: "carDoors",
    value: "doors",
    category: "vehicle",
  },
  {
    title: "Chave",
    icon: <GiKey />,
    type: "category",
    action: "keys",
    value: "keys",
    category: "vehicle",
  },
  {
    title: "Emprestar chave",
    icon: <RiPlayFill />,
    type: "action",
    action: "carKeys",
    category: "keys",
    value: "add",
  },
  {
    title: "Remover chave",
    icon: <RiPlayFill />,
    type: "action",
    action: "carKeys",
    category: "keys",
    value: "rem",
  },
  {
    title: "Abrir janelas",
    icon: <RiPlayFill />,
    type: "action",
    action: "carWins",
    category: "vehicle",
    side: "client",
  },
  {
    title: "Checar porta-malas",
    icon: <RiPlayFill />,
    type: "action",
    action: "checkTrunkin",
    category: "car",
  },
  {
    title: "Entrar porta-malas",
    icon: <RiPlayFill />,
    type: "action",
    action: "carTrunkin",
    category: "car",
  },
  {
    title: "Pegar placa",
    icon: <RiPlayFill />,
    type: "action",
    action: "carPlate",
    category: "car",
  },
  {
    title: "Travar veículo",
    icon: <RiPlayFill />,
    type: "action",
    action: "carTrancar",
    category: "vehicle",
  },
  {
    title: "Ancorar barco",
    icon: <RiPlayFill />,
    type: "action",
    action: "carAncorar",
    category: "vehicle",
  },
  {
    title: "Vender veículo",
    icon: <RiPlayFill />,
    type: "action",
    action: "carVehs",
    category: "vehicle",
  },
  {
    title: "Meus veículos",
    icon: <RiPlayFill />,
    type: "action",
    action: "vehs",
    category: "vehicle",
  },
  {
    title: "Abrir portas",
    icon: <RiPlayFill />,
    type: "action",
    action: "carDoors",
    value: null,
    category: "doors",
    side: "client",
  },
  {
    title: "Abrir porta 1",
    icon: <RiPlayFill />,
    type: "action",
    action: "carDoors",
    value: 1,
    category: "doors",
    side: "client",
  },
  {
    title: "Abrir porta 2",
    icon: <RiPlayFill />,
    type: "action",
    action: "carDoors",
    value: 2,
    category: "doors",
    side: "client",
  },
  {
    title: "Abrir porta 3",
    icon: <RiPlayFill />,
    type: "action",
    action: "carDoors",
    value: 3,
    category: "doors",
    side: "client",
  },
  {
    title: "Abrir porta 4",
    icon: <RiPlayFill />,
    type: "action",
    action: "carDoors",
    value: 4,
    category: "doors",
    side: "client",
  },
  {
    title: "Abrir capô",
    icon: <RiPlayFill />,
    type: "action",
    action: "carDoors",
    value: 6,
    category: "doors",
    side: "client",
  },
  {
    title: "Abrir porta-malas",
    icon: <RiPlayFill />,
    type: "action",
    action: "carDoors",
    value: 5,
    category: "doors",
    side: "client",
  },
];
