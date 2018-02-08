class CreateNewEmails < ActiveRecord::Migration[5.0]
  def change
    create_table :new_emails do |t|

      t.timestamps
    end
  end
end
