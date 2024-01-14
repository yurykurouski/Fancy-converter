import SwiftUI
import WidgetKit
import AppIntents

struct SelectedWidget: Widget {
  let kind: String = "SelectedWidget"
  
  var body: some WidgetConfiguration {
    StaticConfiguration(kind: kind, provider: Provider()) { entry in
      SelectedWidgetView(entry: entry)
    }
    .configurationDisplayName("Converter")
    .description("Shows your selected currencies")
    .supportedFamilies([.systemSmall, .systemMedium])
  }
}

struct SelectedWidgetEntry: TimelineEntry {
  let date: Date
  let selectedCurrencies: [String]
}

struct Provider: TimelineProvider {
  @AppStorage("selectedCurrencies", store: UserDefaults(suiteName: "group.yury.kurouski.Converter"))
  var selectedCurrencies:String = ""
  
  func placeholder(in context: Context) -> SelectedWidgetEntry {
    SelectedWidgetEntry(date: Date(), selectedCurrencies: ["BYN"])
  }
  
  func getSnapshot(in context: Context, completion: @escaping (SelectedWidgetEntry) -> ()) {
    let entry = SelectedWidgetEntry(date: Date(), selectedCurrencies: ["USD"])
    completion(entry)
  }
  
  func getTimeline(in context: Context, completion: @escaping (Timeline<SelectedWidgetEntry>) -> ()) {
    
    let entry = SelectedWidgetEntry(date: Date(), selectedCurrencies: selectedCurrencies.components(separatedBy: ",")
    )
    
    let timeline = Timeline(entries: [entry], policy: .atEnd)
    completion(timeline)
  }
  
//  func getFavorites() -> [String] {
//    let suiteName = "group.yury.kurouski.Converter"
//    
//    guard let defaults = UserDefaults(suiteName: suiteName) else {
//      return ["ERROR"]
//    }
//    
//    return defaults.object(forKey: "selectedCurrencies") as! [String]
//  }
}

struct SelectedWidgetView: View {
  var entry: Provider.Entry
  
  @Environment(\.widgetFamily) var family
  
  var body: some View {
    if entry.selectedCurrencies.isEmpty {
      Text("No selected currencies")
        .font(.title)
        .foregroundStyle(Color("font_primary"))
        .containerBackground(for: .widget) {
          Color(.systemGroupedBackground)
        }
    } else {
      let maxCount = family == .systemSmall ? 4 : 10
      let shortLastIndex = entry.selectedCurrencies.count < 6 ? entry.selectedCurrencies.endIndex : 6
      
      if family == .systemSmall {
        LazyVGrid(columns: [
          GridItem(.flexible()),
          GridItem(.flexible()),
        ], spacing: 20){
          ForEach(entry.selectedCurrencies.prefix(maxCount), id: \.self){currencyName in
            CurrencyView(currencyName: currencyName)
          }
        }
        .containerBackground(for: .widget) {
          Color("background_primary")
        }
      } else {
        VStack{
          HStack{
            ForEach(entry.selectedCurrencies[0 ..< shortLastIndex], id: \.self){currencyName in
              HStack{
                Spacer()
                
                CurrencyView(currencyName: currencyName)
                
                Spacer()
              }
            }
          }
          
          if entry.selectedCurrencies.count > 6 {
            Spacer()
            
            HStack{
              ForEach(entry.selectedCurrencies[6 ..< entry.selectedCurrencies.endIndex], id: \.self){currencyName in
                HStack{
                  Spacer()
                  
                  CurrencyView(currencyName: currencyName)
                  
                  Spacer()
                }
              }
            }
          }
        }
        .containerBackground(for: .widget) {
          Color(.systemGroupedBackground)
        }
      }
    }
  }
}

@main
struct SelectedWidgetBundle: WidgetBundle {
  var body: some Widget {
    SelectedWidget()
  }
}

#Preview(as: .systemSmall) {
  SelectedWidget()
} timeline: {
  SelectedWidgetEntry(date: .now, selectedCurrencies: ["BYN", "USD", "ALL", "BTC", "AED", "CAD", "JPY", "BAM", "BGN", "BRL"/*, "CHF"*/])
}
