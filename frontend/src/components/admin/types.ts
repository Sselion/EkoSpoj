import React from "react";
export interface FormData {
    name: string;
    password: string;
}

export interface LoginFormProps {
    handleLogin: () => void;
}

export interface NavButtonProps {
    type: string;
    onClick: () => void;
}

export interface AdminProps {
    categories: Record<string, any>[];
    fetchCategories: () => void;
}

export interface ProjectFormProps {
    categoryArr:string[];
    projectTags: string[];
}

export interface RemoveButtonProps {
    removeItem: () => void;
}