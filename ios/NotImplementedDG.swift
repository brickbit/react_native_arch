//
//  NotImplementedDG.swift
//  fcmTravelGuide
//
//  Created by Roberto Garcia Romero on 3/7/24.
//

import Foundation

@available(iOS 13, macOS 10.15, *)
public class NotImplementedDG: DataGroup {
    override public var datagroupType: DataGroupId { .Unknown }

    required init(_ data: [UInt8]) throws {
        try super.init(data)
    }
}
