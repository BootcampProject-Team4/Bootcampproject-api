
import Category from '../models/category.js';

const getById = async (id) => {
  try {
    const category = await Category.findOne({ where: { id: id } });

    if (!category) throw new Error(`Category is not found`);
    return category;
  } catch (error) {
    throw new Error(`Error in getById service: ${error.message}`);
  }
};

const getAllCategories = async (page , size ) => {
  try {

    const offset =(page - 1) * size    
    const categories = await Category.findAll({ offset: offset, limit: size });
  
    return categories;
  } catch (error) {
    throw new Error(`Error in getAllCategories service: ${error.message}`);    
  }
};

const createCategory = async (categoryData) => {
  try {
    const newCategory = await Category.create(categoryData);
    newCategory.save();
    return newCategory;
  } catch (error) {
    throw new Error(`Error in createCategory service: ${error.message}`);
  }
};

const deleteCategory = async (CategoryId) => {
  try {
    const category = await Category.findOne({ where: { id: +CategoryId } });

    if (!category) throw new Error(`Category is not found`);

    await Category.destroy({ where: { id: +CategoryId }, });
    
    return CategoryId;
  } catch (error) {
    throw new Error(`Error in deleteCategory service: ${error.message}`);
  }
};

const updateCategory = async (categoryId, categoryData) => {
  try {
    const [updatedRowsCount, updatedCategories] = await Category.update(categoryData, { where: { id: +categoryId }, returning: true });
    
    if (updatedRowsCount > 0) {
      return updatedCategories[0].get();
    }
    throw new Error(`Category with id ${categoryId} not found`);
  } catch (error) {
    throw new Error(`Error in updateCategory service: ${error.message}`);
  }
};

export default{ getAllCategories, createCategory, deleteCategory, updateCategory, getById };
