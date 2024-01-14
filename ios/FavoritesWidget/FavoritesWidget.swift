import SwiftUI
import WidgetKit
import AppIntents

struct FavoritesWidget: Widget {
  let kind: String = "FavoritesWidget"
  
  var body: some WidgetConfiguration {
    StaticConfiguration(kind: kind, provider: Provider()) { entry in
      FavoritesWidgetView(entry: entry)
    }
    .configurationDisplayName("Converter")
    .description("Shows your favorite currencies")
    .supportedFamilies([.systemSmall, .systemMedium])
  }
}

struct FavoritesWidgetEntry: TimelineEntry {
  let date: Date
  let favoriteCurrencies: [String]
}

struct Provider: TimelineProvider {
  @AppStorage("favorites", store: UserDefaults(suiteName: "group.yury.kurouski.Converter"))
  var favoriteCurrencies:String = ""
  
  func placeholder(in context: Context) -> FavoritesWidgetEntry {
    FavoritesWidgetEntry(date: Date(), favoriteCurrencies: ["BYN"])
  }
  
  func getSnapshot(in context: Context, completion: @escaping (FavoritesWidgetEntry) -> ()) {
    let entry = FavoritesWidgetEntry(date: Date(), favoriteCurrencies: ["USD"])
    completion(entry)
  }
  
  func getTimeline(in context: Context, completion: @escaping (Timeline<FavoritesWidgetEntry>) -> ()) {
    
    let entry = FavoritesWidgetEntry(date: Date(), favoriteCurrencies: favoriteCurrencies.components(separatedBy: ",")
    )
    
    let timeline = Timeline(entries: [entry], policy: .atEnd)
    completion(timeline)
  }
  
  func getFavorites() -> [String] {
    let suiteName = "group.yury.kurouski.Converter"
    
    guard let defaults = UserDefaults(suiteName: suiteName) else {
      return ["ERROR"]
    }
    
    return defaults.object(forKey: "favorites") as! [String]
  }
}

struct FavoritesWidgetView: View {
  var entry: Provider.Entry
  
  @Environment(\.widgetFamily) var family
  
  var body: some View {
    if entry.favoriteCurrencies.isEmpty {
      Text("No favorite currencies")
        .font(.title)
        .foregroundStyle(Color("font_primary"))
        .containerBackground(for: .widget) {
          Color(.systemGroupedBackground)
        }
    } else {
      let maxCount = family == .systemSmall ? 4 : 10
      let shortLastIndex = entry.favoriteCurrencies.count < 6 ? entry.favoriteCurrencies.endIndex : 6
      
      if family == .systemSmall {
        LazyVGrid(columns: [
          GridItem(.flexible()),
          GridItem(.flexible()),
        ], spacing: 20){
          ForEach(entry.favoriteCurrencies.prefix(maxCount), id: \.self){currencyName in
            CurrencyView(currencyName: currencyName)
          }
        }
        .containerBackground(for: .widget) {
          Color("background_primary")
        }
      } else {
        VStack{
          HStack{
            ForEach(entry.favoriteCurrencies[0 ..< shortLastIndex], id: \.self){currencyName in
              HStack{
                Spacer()
                
                CurrencyView(currencyName: currencyName)
                
                Spacer()
              }
            }
          }
          
          if entry.favoriteCurrencies.count > 6 {
            Spacer()
            
            HStack{
              ForEach(entry.favoriteCurrencies[6 ..< entry.favoriteCurrencies.endIndex], id: \.self){currencyName in
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
struct FavoritesWidgetBundle: WidgetBundle {
  var body: some Widget {
    FavoritesWidget()
  }
}

#Preview(as: .systemSmall) {
  FavoritesWidget()
} timeline: {
  FavoritesWidgetEntry(date: .now, favoriteCurrencies: ["BYN", "USD", "ALL", "BTC", "AED", "CAD", "JPY", "BAM", "BGN", "BRL"/*, "CHF"*/])
}

struct SelectFavIntent:AppIntent, WidgetConfigurationIntent{
  static var title: LocalizedStringResource = "selectFav"


  func perform(value: String) async throws -> some IntentResult {
    if let store = UserDefaults(suiteName: "group.yury.kurouski.Converter"){
      store.setValue(value, forKey: "selectedFav")

      WidgetCenter.shared.reloadAllTimelines()

      return .result()
    }

    return .result()
  }
}


