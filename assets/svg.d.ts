declare module '*.svg' {
    import { SvgProps } from 'react-native-svg';
    const content: React.FC<SvgProps>;
    export default content;
  }
  declare module '*.png' {
    const value: any; // You can specify a more specific type if needed
    export default value;
  }
  