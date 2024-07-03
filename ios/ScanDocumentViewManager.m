//
//  ScanDocumentViewManager.m
//  fcmTravelGuide
//
//  Created by Roberto Garcia Romero on 3/7/24.
//

#import <Foundation/Foundation.h>
#import "React/RCTViewManager.h"

@interface

RCT_EXTERN_MODULE(ScanDocumentViewManager, RCTViewManager)
RCT_EXPORT_VIEW_PROPERTY(onChangeBoldToggle, RCTDirectEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onChangeItalicToggle, RCTDirectEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onChangeUnderlineToggle, RCTDirectEventBlock)
@end
