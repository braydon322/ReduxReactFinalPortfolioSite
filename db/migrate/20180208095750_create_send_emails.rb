class CreateSendEmails < ActiveRecord::Migration[5.0]
  def change
    create_table :send_emails do |t|

      t.timestamps
    end
  end
end
