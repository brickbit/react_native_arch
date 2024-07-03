import { ViewStyle, requireNativeComponent } from "react-native";

export interface ScanDocumentViewProps {
    style: ViewStyle;
}

export const ScanDocumentView = requireNativeComponent('ScanDocumentView') as unknown as React.FC<ScanDocumentViewProps>

