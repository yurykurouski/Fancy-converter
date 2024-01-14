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
  func addToSelected(_ currencyName: String) -> String{
    let defaults = UserDefaults(suiteName: "group.yury.kurouski.Converter")
    
    if (defaults != nil) {
      guard var selected = defaults?.string(forKey: "selectedCurrencies") as? String else {
        defaults?.set(currencyName, forKey: "selectedCurrencies")
        
        return currencyName
      }
      selected.append(",")
      selected.append(currencyName)
      
      
      defaults?.set(selected, forKey: "selectedCurrencies")
      
      return selected
    }
    
    if #available(iOS 14.0, *) {
      WidgetCenter.shared.reloadAllTimelines()
    } else {
      // Fallback on earlier versions
    }
    return "Test"
  }
  
  @objc
  func removeFromSelected(_ currencyName: String){
    let defaults = UserDefaults(suiteName: "group.yury.kurouski.Converter")
    
    if (defaults != nil) {
      let selected = defaults?.object(forKey: "selectedCurrencies") as? String
      
      let filtered = selected?.components(separatedBy: ",").filter {$0 != currencyName}
      
      defaults?.set(filtered?.joined(separator: ","), forKey: "selectedCurrencies")
    }
    
    if #available(iOS 14.0, *) {
      WidgetCenter.shared.reloadAllTimelines()
    } else {
      // Fallback on earlier versions
    }
  }
  
  @objc
  func deleteSomeSelected(_ currencies: String){
    let defaults = UserDefaults(suiteName: "group.yury.kurouski.Converter")
    
    let selected = defaults?.object(forKey: "selectedCurrencies") as? String
    
    let filtered = selected?.components(separatedBy: ",").filter {
      !currencies.components(separatedBy: ",").contains($0)
    }
    
    defaults?.set(filtered?.joined(separator: ","), forKey: "selectedCurrencies")

    if #available(iOS 14.0, *) {
      WidgetCenter.shared.reloadAllTimelines()
    } else {
      // Fallback on earlier versions
    }
  }
  
  @objc
  func setDefaultSelected(_ currencies: String){
    let defaults = UserDefaults(suiteName: "group.yury.kurouski.Converter")
    
    defaults?.set(currencies, forKey: "selectedCurrencies")
  }
  
  
  @objc
  static func requiresMainQueueSetup()->Bool{
    return true
  }
}
