class BooksController < ApplicationController
  def new; end

  def index
    @books = Book.page(params[:page]).per(8)
    @favorites_count = Favorite.where(book_id: @book).count
  end

  def create; end

  def edit; end

  def show
    @book = Book.find(params[:id])
    @review = Review.new
    @reviews = Review.all
  end

  def update; end

  def destory; end

  def search
    @books = Book.books_search(params[:keyword])
    @keyword = params[:keyword]
    render 'index'
  end

  def genre_s
    @books = Book.page(params[:page]).per(8)
    @book_s = Book.where( genre_id: "1")
  end

  def genre_m
    @books = Book.page(params[:page]).per(8)
    @book_m = Book.where( genre_id: "2")
  end

  def genre_z
    @books = Book.page(params[:page]).per(8)
    @book_z = Book.where( genre_id: "3")
  end

  def rank
    @all_ranks = Book.find(Favorite.group(:book_id).order('count(book_id) desc').limit(3).pluck(:book_id))
    @book_s = Book.where( genre_id: "1")
  end

  private

  def book_params
    params.require(:book).permit(:content)
  end
end
