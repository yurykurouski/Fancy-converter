//
//  WidgetWrapper.m
//  Converter
//
//  Created by Yury Kurouski on 12.01.24.
//

#import <Foundation/Foundation.h>

#import "React/RCTBridgeModule.h"
@interface RCT_EXTERN_MODULE(WidgetWrapper, NSObject)
RCT_EXTERN_METHOD(addToFavorites: (NSString*)currencyName)
RCT_EXTERN_METHOD(removeFromFavorites: (NSString*)currencyName)
@end
