
export interface LoginFormData {
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
    type: string;
}

export interface RemoveButtonProps {
    removeItem: () => void;
    type: string;
}

export interface NewCategory {
    name: string;
    shortName: string;
}

export interface ProjectFormData {
    name?: string;
    shortDescription?: string;
    description?: string;
    projectLogoPath?: string;
    web?: string;
}

export interface Type {
    type: string;
}