﻿namespace Ekospoj.Data;

public class Tag
{
    public int Id { get; set; }
    public string Name { get; set; }

    // Navigation properties
    public List<Project> Projects { get; set; }
}
