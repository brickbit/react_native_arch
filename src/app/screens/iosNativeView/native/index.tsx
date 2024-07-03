import { ViewStyle, requireNativeComponent } from "react-native";

export interface ScanDocumentViewProps {
    style: ViewStyle;
    onChangeBoldToggle: (event: any) => void;
    onChangeItalicToggle: (event: any) => void;
    onChangeUnderlineToggle: (event: any) => void;
}

export const ScanDocumentView = requireNativeComponent('ScanDocumentView') as unknown as React.FC<ScanDocumentViewProps>

