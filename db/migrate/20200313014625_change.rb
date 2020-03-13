class Change < ActiveRecord::Migration[5.2]
  def change
    change_column_null(:comments, :user_id, true)
    change_column_null(:comments, :post_id, true)
    change_column_null(:comments, :body, true)
    change_column_null(:posts, :user_id, true)

  end
end
