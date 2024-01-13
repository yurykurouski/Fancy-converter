import SwiftUI
import WidgetKit

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
            VStack{
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
                .font(.subheadline)
                .foregroundStyle(Color("font_primary"))
            }
            .frame(width: 40,height: 50)
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
                VStack{
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
                    .font(.subheadline)
                    .foregroundStyle(Color("font_primary"))
                }
                .frame(width: 40,height: 50)
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
                  VStack{
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
                      .font(.subheadline)
                      .foregroundStyle(Color("font_primary"))
                  }
                  .frame(width: 40,height: 50)
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
  FavoritesWidgetEntry(date: .now, favoriteCurrencies: ["BYN", "USD", "ALL", "BTC", "AED", "CAD", "JPY", "BAM", "BGN"/*, "BRL", "CHF"*/])
}
