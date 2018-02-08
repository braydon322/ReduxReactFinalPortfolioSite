require 'net/http'
require 'httparty'

class SendEmail < ApplicationRecord
  include HTTParty

  def self.now(email)
   get("https://us15.api.mailchimp.com/2.0/lists/subscribe.json?apikey=6d206cb37279e3faa1562842a8507331-us15&id=63b546615c&email[email]=#{email}&double_optin=false&send_welcome=false")
  end
end
