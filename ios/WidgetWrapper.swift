//
//  WidgetWrapper.swift
//  Converter
//
//  Created by Yury Kurouski on 12.01.24.
//

import Foundation

@objc(WidgetWrapper)
class WidgetWrapper:NSObject{
  
  @objc
  func addToFavorites(_ currencyName: String){
    var favorites = UserDefaults.standard.object(forKey: "Favorites") as? [String]
    
    favorites?.append(currencyName)
    
    UserDefaults.standard.set(favorites, forKey: "Favorites")
  }
  
  @objc
  func removeFromFavorites(_ currencyName: String){
    let favorites = UserDefaults.standard.object(forKey: "Favorites") as? [String]
    
    let filtered = favorites?.filter {$0 != currencyName}
    
    UserDefaults.standard.set(filtered, forKey: "Favorites")
  }
  
  @objc
  static func requiresMainQueueSetup()->Bool{
    return true
  }
}
