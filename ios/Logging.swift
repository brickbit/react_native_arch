//
//  Logging.swift
//  fcmTravelGuide
//
//  Created by Roberto Garcia Romero on 3/7/24.
//
import Foundation
import OSLog

extension Logger {
    /// Using your bundle identifier is a great way to ensure a unique identifier.
    private static var subsystem = Bundle.main.bundleIdentifier!
    
    /// Tag Reader logs
    static let passportReader = Logger(subsystem: subsystem, category: "passportReader")

    /// Tag Reader logs
    static let tagReader = Logger(subsystem: subsystem, category: "tagReader")

    /// SecureMessaging logs
    static let secureMessaging = Logger(subsystem: subsystem, category: "secureMessaging")

    static let openSSL = Logger(subsystem: subsystem, category: "openSSL")

    static let bac = Logger(subsystem: subsystem, category: "BAC")
    static let chipAuth = Logger(subsystem: subsystem, category: "chipAuthentication")
    static let pace = Logger(subsystem: subsystem, category: "PACE")
}
