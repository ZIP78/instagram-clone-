class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username, null: false, index: true, unique: true
      t.string :email, null: false, index: true, unique: true
      t.string :first_name, null: false, index: true 
      t.string :last_name, null: false, index: true
      t.string :password_digest, null: false
      t.string :session_token, null: false, index: true, unique: true

      t.timestamps
    end
  end
end
