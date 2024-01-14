//
//  CurrencyView.swift
//  SelectedWidgetExtension
//
//  Created by Yury Kurouski on 13.01.24.
//

import SwiftUI
import AppIntents
import WidgetKit

struct CurrencyView: View {
  var currencyName:String
  
  var body: some View {
    VStack{
      Link(destination: URL(string: "yury.kurouski.Converter://selectedCurrency=\(currencyName)")!, label: {
        Image(uiImage: #imageLiteral(resourceName: "\(currencyName).png"))
          .resizable()
          .aspectRatio(contentMode: .fill)
          .frame(width: 40, height: 40)
          .clipShape(RoundedRectangle(cornerRadius: 20))
          .overlay {
            RoundedRectangle(cornerRadius: 20)
              .stroke(Color("background_light"), lineWidth: 1)
          }
        Text(currencyName)
          .font(.system(size: 18, weight: .medium))
          .foregroundStyle(Color("font_primary"))
      })
    }
  }
}

struct Widget_Previews: PreviewProvider {
  static var previews: some View {
    Group {
      CurrencyView(currencyName: "BYN")
        .previewContext(WidgetPreviewContext(family: .systemSmall))
        .containerBackground(for: .widget) {
          Color(.systemGroupedBackground)
        }
    }
  }
}
