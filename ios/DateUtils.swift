//
//  DateUtils.swift
//  fcmTravelGuide
//
//  Created by Roberto Garcia Romero on 4/7/24.
//

import Foundation

extension Date {
  func toDocDateFormat() -> String {
    let dateFormatter = DateFormatter()
    dateFormatter.dateFormat = "yyMMdd"
    return dateFormatter.string(from: self)
  }
}
