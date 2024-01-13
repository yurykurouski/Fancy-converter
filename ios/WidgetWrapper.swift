//
//  WidgetWrapper.swift
//  Converter
//
//  Created by Yury Kurouski on 12.01.24.
//

import Foundation
import WidgetKit

@objc(WidgetWrapper)
class WidgetWrapper:NSObject{
  
  @objc
  func addToFavorites(_ currencyName: String) -> String{
    let defaults = UserDefaults(suiteName: "group.yury.kurouski.Converter")

    if (defaults != nil) {
      guard var favorites = defaults?.string(forKey: "favorites") as? String else {
        defaults?.set(currencyName, forKey: "favorites")
        
        return currencyName
      }
      favorites.append(",")
      favorites.append(currencyName)
      
      
      defaults?.set(favorites, forKey: "favorites")
      
      return favorites
    }
    
    if #available(iOS 14.0, *) {
      WidgetCenter.shared.reloadAllTimelines()
    } else {
      // Fallback on earlier versions
    }
    return "Test"
  }
  
  @objc
  func removeFromFavorites(_ currencyName: String){
    let defaults = UserDefaults(suiteName: "group.yury.kurouski.Converter")
    
    if (defaults != nil) {
      let favorites = defaults?.object(forKey: "favorites") as? String
      
      let filtered = favorites?.components(separatedBy: ",").filter {$0 != currencyName}
      
      defaults?.set(filtered?.joined(separator: ",") , forKey: "favorites")
    }
    
    if #available(iOS 14.0, *) {
      WidgetCenter.shared.reloadAllTimelines()
    } else {
      // Fallback on earlier versions
    }
  }
  
  @objc
  static func requiresMainQueueSetup()->Bool{
    return true
  }
}
