class ChangeNull < ActiveRecord::Migration[5.2]
  def change
     change_column_null(:comments, :user_id, false)
    change_column_null(:comments, :post_id, false)
    change_column_null(:comments, :body, false)
    change_column_null(:posts, :user_id, false)
  end
end
