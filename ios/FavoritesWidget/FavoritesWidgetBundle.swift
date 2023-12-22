//
//  FavoritesWidgetBundle.swift
//  FavoritesWidget
//
//  Created by Yury Kurouski on 22.12.23.
//

import WidgetKit
import SwiftUI

@main
struct FavoritesWidgetBundle: WidgetBundle {
    var body: some Widget {
        FavoritesWidget()
        FavoritesWidgetLiveActivity()
    }
}
